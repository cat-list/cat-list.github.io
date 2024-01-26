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
    var query_string = '/?' + usp.toString();
    if (STATE.query.length == 0 && STATE.filter_tags.length == 0) {
      query_string = '/';
    }
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
        let delete_elem = document.createElement('button');
        delete_elem.innerHTML = '➖';
        delete_elem.classList.add('pill_button');
        elem.innerHTML = f_tag + ' ';
        elem.appendChild(delete_elem);
        delete_elem.onclick = (e1) => {
          const index = STATE.filter_tags.indexOf(f_tag);
          if (index > -1) {
            STATE.filter_tags.splice(index, 1);
            UPDATE();
          }
        };
        filter_tags.appendChild(elem);
        filter_tags.appendChild(document.createTextNode(' '));
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
      idxs = STATE.data.map((_elem, idx) => idx);
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

function addTag(tag_name, update) {
  if (!STATE.tags.includes(tag_name)) {
    ret_val = false;
  } else {
    ret_val = true;
  }
  if (ret_val && !STATE.filter_tags.includes(tag_name)) {
    STATE.filter_tags.push(tag_name);
  }
  if (update) {
    UPDATE();
  }
  return ret_val;
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
    document.getElementById('search-box').oninput = (e2) => {
      STATE.query = e2.target.value;
      UPDATE();
    };
    document.getElementById('search-form').onsubmit = (e3) => {
      e3.preventDefault();
      if (addTag(STATE.query, false)) {
        document.getElementById('search-box').value = '';
        STATE.query = '';
        UPDATE();
      }
    };
  }

  function focusSearchBox() {
    document.getElementById('search-box').focus();
  }

  function attachShowMoreListener() {
    const button = document.getElementById("show_more_toggle")
    const all_tags = document.getElementById("all_tags")
    button.onclick = (e) => {
      e.preventDefault();
      const is_short_view = all_tags.classList.contains("short_view")
      if (is_short_view) {
        all_tags.classList.remove("short_view")
        button.textContent = "↑ Show less ↑"
      } else {
        all_tags.classList.add("short_view")
        button.textContent = "↓ Show more ↓"
      }
    }
  }
  
  return Promise.all([
    setInitialQuery(),
    buildShadow(),
    getDataAndFuse(),
    getTags(),
    focusSearchBox(),
    attachSearchCallback(),
    attachShowMoreListener()
  ]);
}

window.onload = function () {
  SETUP().then(UPDATE);
};
