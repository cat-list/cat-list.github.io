var INDEX_URL = '/json/index.json';

function buildQuery(search_term) {
  query = [];
  terms = search_term.split(' ');
  terms.forEach((term) => {
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

function runSearch(idx, shadow, search_term) {
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
    window.history.replaceState(
      { query: query_uri },
      '',
      '/?query=' + query_uri
    );
  };
}

function get_index() {
  return fetch(INDEX_URL)
    .then((res) => res.json())
    .then((data) => lunr.Index.load(data));
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
    console.log(idx);
    runUrlQuery(idx, shadow);
    attachSearchCallback(idx, shadow);
    document.getElementById('search-box').focus();
  });
}

main();
