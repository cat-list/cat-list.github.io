const METADATA = {
  urls: {
    index: '/json/software.json',
    tags: '/json/software-tags.json',
  },
};
var STATE = {};

const UPDATE = (function () {
  function updateSearchBox() {
    document.getElementById('search-box').value = STATE.search_term;
  }

  function updateURLBar() {
    const query_uri = encodeURIComponent(STATE.search_term);
    const query_string = query_uri.length == 0 ? '/' : '/?query=' + query_uri;
    window.history.replaceState({ query: query_uri }, '', query_string);
  }

  function runSearch() {
    function buildQuery(search_term) {
      query = [];
      terms = search_term.split(' ');
      terms.forEach((term) => {
        var term = term.trim();
        if (term.includes(':')) {
          query.push(term);
        } else {
          query.push(search_term);
          query.push('*' + search_term);
          query.push(search_term + '*');
          query.push('*' + search_term + '*');
        }
      });
      return query.join(' ');
    }
    var refs;
    if (STATE.search_term == '') {
      // Use default order on empty search
      refs = STATE.shadow.map((node) => node.id);
    } else {
      const query = buildQuery(STATE.search_term);
      refs = STATE['idx'].search(query).map((res) => res.ref);
    }
    const table = document.getElementById('table_body');
    table.innerHTML = '';
    refs.forEach((ref) => {
      var new_node = STATE.shadow
        .find((node) => node.id == ref)
        .cloneNode(true);
      table.appendChild(new_node);
    });
  }

  const callbacks = [updateSearchBox, updateURLBar, runSearch];

  return function () {
    callbacks.forEach((f) => {
      f();
    });
  };
})();

function SETUP() {
  function getIndex() {
    return fetch(METADATA.urls.index)
      .then((res) => res.json())
      .then((data) => {
        return lunr(function () {
          this.ref('id');
          this.field('name');
          this.field('content');
          this.field('tags');
          data.forEach(function (doc) {
            this.add(doc);
          }, this);
        });
      })
      .then((idx) => {
        STATE.idx = idx;
      });
  }

  function getTags() {
    return fetch(METADATA.urls.tags)
      .then((res) => res.json())
      .then((tags) => (STATE.tags = tags));
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
      STATE.search_term = decodeURIComponent(params.query);
    } else {
      STATE.search_term = '';
    }
  }

  function attachSearchCallback() {
    document.getElementById('search-box').oninput = (e) => {
      STATE.search_term = e.target.value;
      UPDATE();
    };
  }

  function focusSearchBox() {
    document.getElementById('search-box').focus();
  }

  return Promise.all([
    setInitialQuery(),
    buildShadow(),
    getIndex(),
    getTags(),
    focusSearchBox(),
    attachSearchCallback(),
  ]);
}

SETUP().then(() => {
  UPDATE();
});
