
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/1"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/2"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/3"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/4"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/5"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/6"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/7"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/8"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/9"
  },
  {
    "renderMode": 2,
    "route": "/services-detail/10"
  },
  {
    "renderMode": 1,
    "route": "/services-detail/*"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 64739, hash: 'cb59e4c12810d507054a6e66551e237aa2cc9cb87577a745d507da4660083dfa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17818, hash: '6bab86f67f58d1739fa2bb90df628b6e332abcc9b6b2a2bd449edd9e79b72d98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 164394, hash: '36474f812fd617bb82797f8b9b7a14f8ca253c31f5a3304f3213ea157ddf5cbf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services-detail/1/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_1_index_html.mjs').then(m => m.default)},
    'services-detail/2/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_2_index_html.mjs').then(m => m.default)},
    'services-detail/3/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_3_index_html.mjs').then(m => m.default)},
    'services-detail/4/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_4_index_html.mjs').then(m => m.default)},
    'services-detail/5/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_5_index_html.mjs').then(m => m.default)},
    'services-detail/6/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_6_index_html.mjs').then(m => m.default)},
    'services-detail/7/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_7_index_html.mjs').then(m => m.default)},
    'services-detail/8/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_8_index_html.mjs').then(m => m.default)},
    'services-detail/9/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_9_index_html.mjs').then(m => m.default)},
    'services-detail/10/index.html': {size: 64723, hash: '192d5e54efcf635119486ab52bfcda3fe66c6dbd92a7c3e0d51920ab6beaa158', text: () => import('./assets-chunks/services-detail_10_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 172953, hash: '1124291710f85bf1a99c26e6c8443b7e85bfd61ed5b831f212c574f4f69331c0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 163180, hash: 'c548923caab42b9fe364e5660ba46c9e44a57b4102e4c3d69a3348dac880f449', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 136562, hash: '1ffe1e0d9e54c3628bbe367106b0a9e40ba97977d5908cba9311ea6b1ae575e9', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'main-IIO3AIVH.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)},
    'chunk-YH3SQOLG.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/chunk-YH3SQOLG_css.mjs').then(m => m.default)},
    'main.server.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-4BVBSRAA.css': {size: 115690, hash: 'dYLPgzqQP5E', text: () => import('./assets-chunks/styles-4BVBSRAA_css.mjs').then(m => m.default)}
  },
};
