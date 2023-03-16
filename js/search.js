const METADATA = {
  urls: {
    index: '/json/software.json',
    tags: '/json/software-tags.json',
  },
};
var STATE = {};

const UPDATE = (function () {
  function updateSearchBox() {
    document.getElementById('search-box').value = STATE.query;
  }

  function updateURLBar() {
    const history_state = {
      query: STATE.query,
      filter_tags: STATE.filter_tags,
    };
    const usp = new URLSearchParams(history_state);
    const query_string = '/?' + usp.toString();
    window.history.replaceState(history_state, '', query_string);
  }

  function updateFilterBar() {
    const search_hint = document.getElementById('search-hint');
    const filter_tags = document.getElementById('filter-tags');
    if (STATE.filter_tags.length == 0) {
      filter_tags.classList.add('hidden');
      search_hint.classList.remove('hidden');
      filter_tags.innerHTML = '';
    } else {
      search_hint.classList.add('hidden');
      filter_tags.innerHTML = '';
      STATE.filter_tags.forEach((f_tag) => {
        let elem = document.createElement('span');
        let main_tag = f_tag.split('/')[0];
        elem.classList.add('TAG_' + main_tag);
        elem.classList.add('pill');
        let delete_elem = document.createElement('span');
        delete_elem.innerHTML = '🗑️';
        delete_elem.classList.remove('delete_button');
        delete_elem.onclick = (e) => {
          console.log(STATE.filter_tags);
          const index = STATE.filter_tags.indexOf(f_tag);
          console.log(index);
          if (index > -1) {
            STATE.filter_tags.splice(f_tag, 1);
            UPDATE();
          }
        };
        elem.innerHTML = f_tag + ' ';
        elem.appendChild(delete_elem);
        filter_tags.appendChild(elem);
      });
      filter_tags.classList.remove('hidden');
    }
  }

  // TODO: Make use of res.refIndex from fuse search
  function runSearch() {
    function idxContainsAllTags(idx) {
      return STATE.filter_tags.every((f_tag) => {
        return STATE.data[idx].tags.includes(f_tag);
      });
    }

    var idxs;
    if (STATE.query == '') {
      // Use default order on empty search
      idxs = STATE.data.map((elem, idx) => idx);
    } else {
      idxs = STATE.fuse.search(STATE.query).map((res) => res.refIndex);
    }
    const table = document.getElementById('table_body');
    table.innerHTML = '';
    idxs.filter(idxContainsAllTags).forEach((idx) => {
      var new_node = STATE.shadow[idx].cloneNode(true);
      table.appendChild(new_node);
    });
  }

  const callbacks = [updateSearchBox, updateURLBar, updateFilterBar, runSearch];

  return function () {
    callbacks.forEach((f) => {
      f();
    });
  };
})();

function addTag(tag_name) {
  STATE.filter_tags.push(tag_name);
  UPDATE();
}

function SETUP() {
  function getDataAndFuse() {
    return fetch(METADATA.urls.index)
      .then((res) => res.json())
      .then((data) => {
        const options = {
          useExtendedSearch: true,
          keys: ['name', 'title', 'content', 'tags'],
        };

        STATE.data = data;
        STATE.fuse = new Fuse(data, options);
      });
  }

  function getTags() {
    return fetch(METADATA.urls.tags)
      .then((res) => res.json())
      .then((tags) => {
        STATE.tags = tags;
      });
  }

  function buildShadow() {
    var table = document.getElementById('table_body');
    var shadow = [];
    for (i = 0; i < table.children.length; i++) {
      shadow.push(table.children.item(i).cloneNode(true));
    }
    STATE.shadow = shadow;
  }

  function setInitialQuery() {
    const usp = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(usp.entries());
    if (params.query) {
      STATE.query = decodeURIComponent(params.query);
    } else {
      STATE.query = '';
    }
    if (params.filter_tags) {
      STATE.filter_tags = decodeURIComponent(params.filter_tags).split(',');
    } else {
      STATE.filter_tags = [];
    }
  }

  function attachSearchCallback() {
    function addTag(tag_name) {
      if (!STATE.tags.includes(tag_name)) {
        return false;
      }
      if (!STATE.filter_tags.includes(tag_name)) {
        STATE.filter_tags.push(tag_name);
        return true;
      } else {
        return false;
      }
    }

    document.getElementById('search-box').oninput = (e) => {
      STATE.query = e.target.value;
      UPDATE();
    };
    document.getElementById('search-form').onsubmit = (e) => {
      e.preventDefault();
      if (addTag(STATE.query)) {
        document.getElementById('search-box').value = '';
        STATE.query = '';
        UPDATE();
      }
    };
  }

  function focusSearchBox() {
    document.getElementById('search-box').focus();
  }

  return Promise.all([
    setInitialQuery(),
    buildShadow(),
    getDataAndFuse(),
    getTags(),
    focusSearchBox(),
    attachSearchCallback(),
  ]);
}

SETUP().then(UPDATE);
