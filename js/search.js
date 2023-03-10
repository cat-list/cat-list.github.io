var INDEX_URL = '/json/software.json';

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
  console.log(query);
  return query.join(' ');
}

function runSearch(idx, shadow, search_term) {
  console.log(idx);
  var query = buildQuery(search_term);
  var refs = idx.search(query).map((res) => res.ref);
  var table = document.getElementById('table');
  table.innerHTML = '';
  refs.forEach((ref) => {
    var new_node = shadow.find((node) => node.id == ref).cloneNode(true);
    table.appendChild(new_node);
  });
}

function attachSearchCallback(idx, shadow) {
  document.getElementById('search-box').oninput = (e) => {
    var search_term = e.target.value;
    runSearch(idx, shadow, search_term);
    var query_uri = encodeURIComponent(search_term);
    var query_string = query_uri.length == 0 ? '/' : '/?query=' + query_uri;
    window.history.replaceState({ query: query_uri }, '', query_string);
  };
}

function get_index() {
  return fetch(INDEX_URL)
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
    });
}

function buildShadow() {
  var table = document.getElementById('table');
  var shadow = [];
  for (i = 0; i < table.children.length; i++) {
    shadow.push(table.children.item(i).cloneNode(true));
  }
  return shadow;
}

function runUrlQuery(idx, shadow) {
  const usp = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(usp.entries());
  if (params.query) {
    var search_term = decodeURIComponent(params.query);
    document.getElementById('search-box').value = search_term;
    runSearch(idx, shadow, search_term);
  }
}

function main() {
  let idx_promise = get_index();
  let shadow = buildShadow();
  idx_promise.then((idx) => {
    runUrlQuery(idx, shadow);
    attachSearchCallback(idx, shadow);
    document.getElementById('search-box').focus();
  });
}

main();
