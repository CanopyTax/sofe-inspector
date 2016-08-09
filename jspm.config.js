SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/",
      "sofe-inspector/": "/src/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/",
      "sofe-inspector/": "src/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "core-js": "npm:core-js@1.2.6",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "babel": "npm:babel-core@5.8.38"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "sofe-inspector": {
      "main": "main.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "presets": [
              "babel-preset-stage-1",
              "babel-preset-react"
            ]
          }
        },
        "*.css": {
          "loader": "jspm-loader-css"
        }
      }
    }
  },
  map: {
    "jspm-loader-css": "github:MeoMix/jspm-loader-css@master"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "MeoMix/jspm-loader-css": "github:MeoMix/jspm-loader-css@master",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-preset-react": "npm:babel-preset-react@6.11.1",
    "babel-preset-stage-1": "npm:babel-preset-stage-1@6.5.0",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "react": "npm:react@15.1.0",
    "react-dom": "npm:react-dom@15.1.0",
    "react-draggable": "npm:react-draggable@2.1.2",
    "redux": "npm:redux@3.5.2",
    "sofe": "npm:sofe@1.4.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:MeoMix/jspm-loader-css@master": {
      "map": {
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
        "cssnano": "npm:cssnano@3.7.1",
        "node-cssnano": "npm:cssnano@3.7.1"
      }
    },
    "npm:css-modules-loader-core@1.0.0": {
      "map": {
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
        "postcss-modules-values": "npm:postcss-modules-values@1.1.0",
        "postcss": "npm:postcss@5.0.10",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0"
      }
    },
    "npm:cssnano@3.7.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "defined": "npm:defined@1.0.0",
        "indexes-of": "npm:indexes-of@1.0.1",
        "decamelize": "npm:decamelize@1.2.0",
        "postcss-convert-values": "npm:postcss-convert-values@2.4.0",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
        "postcss-calc": "npm:postcss-calc@5.2.1",
        "postcss": "npm:postcss@5.0.21",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.0",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.6",
        "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.0",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.2.1",
        "postcss-zindex": "npm:postcss-zindex@2.1.1",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.5",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.3",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
        "postcss-colormin": "npm:postcss-colormin@2.2.0",
        "postcss-minify-params": "npm:postcss-minify-params@1.0.4",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.0.9",
        "autoprefixer": "npm:autoprefixer@6.3.6",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
        "postcss-svgo": "npm:postcss-svgo@2.1.3",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0"
      }
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4"
      }
    },
    "npm:postcss-modules-scope@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4"
      }
    },
    "npm:postcss-convert-values@2.4.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-values@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2"
      }
    },
    "npm:postcss-discard-duplicates@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-discard-empty@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-calc@5.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "reduce-css-calc": "npm:reduce-css-calc@1.2.4",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-reduce-initial@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-filter-plugins@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqid": "npm:uniqid@1.0.0"
      }
    },
    "npm:postcss-merge-idents@2.1.6": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "has-own": "npm:has-own@1.0.0"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2"
      }
    },
    "npm:postcss-ordered-values@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-zindex@2.1.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-normalize-url@3.0.7": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-absolute-url": "npm:is-absolute-url@2.0.0",
        "normalize-url": "npm:normalize-url@1.5.3"
      }
    },
    "npm:postcss-minify-selectors@2.0.5": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.1.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2"
      }
    },
    "npm:postcss-minify-gradients@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:postcss-colormin@2.2.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "colormin": "npm:colormin@1.1.0"
      }
    },
    "npm:postcss-merge-longhand@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-minify-params@1.0.4": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "uniqs": "npm:uniqs@2.0.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2"
      }
    },
    "npm:postcss@5.0.10": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:postcss@5.0.21": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "map": {
        "fastparse": "npm:fastparse@1.1.1",
        "cssesc": "npm:cssesc@0.1.0"
      }
    },
    "npm:postcss-discard-unused@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "uniqs": "npm:uniqs@2.0.0",
        "flatten": "npm:flatten@1.0.2"
      }
    },
    "npm:postcss-merge-rules@2.0.9": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:autoprefixer@6.3.6": {
      "map": {
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss": "npm:postcss@5.0.21",
        "normalize-range": "npm:normalize-range@0.1.2",
        "browserslist": "npm:browserslist@1.3.4",
        "num2fraction": "npm:num2fraction@1.2.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000488"
      }
    },
    "npm:postcss-reduce-transforms@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-normalize-charset@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21"
      }
    },
    "npm:postcss-svgo@2.1.3": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-svg": "npm:is-svg@2.0.1",
        "svgo": "npm:svgo@0.6.6"
      }
    },
    "npm:postcss-reduce-idents@2.3.0": {
      "map": {
        "postcss": "npm:postcss@5.0.21",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-selector-parser@2.1.0": {
      "map": {
        "indexes-of": "npm:indexes-of@1.0.1",
        "flatten": "npm:flatten@1.0.2",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:normalize-url@1.5.3": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "prepend-http": "npm:prepend-http@1.0.4",
        "sort-keys": "npm:sort-keys@1.1.2",
        "query-string": "npm:query-string@4.2.2"
      }
    },
    "npm:reduce-css-calc@1.2.4": {
      "map": {
        "reduce-function-call": "npm:reduce-function-call@1.0.1",
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:reduce-function-call@1.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:query-string@4.2.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:browserslist@1.3.4": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000488"
      }
    },
    "npm:colormin@1.1.0": {
      "map": {
        "css-color-names": "npm:css-color-names@0.0.3",
        "color": "npm:color@0.11.3"
      }
    },
    "npm:svgo@0.6.6": {
      "map": {
        "colors": "npm:colors@1.1.2",
        "sax": "npm:sax@1.2.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "js-yaml": "npm:js-yaml@3.6.1",
        "csso": "npm:csso@2.0.0",
        "whet.extend": "npm:whet.extend@0.9.9",
        "coa": "npm:coa@1.0.1"
      }
    },
    "npm:csso@2.0.0": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "clap": "npm:clap@1.1.1"
      }
    },
    "npm:is-svg@2.0.1": {
      "map": {
        "html-comment-regex": "npm:html-comment-regex@1.1.0"
      }
    },
    "npm:sort-keys@1.1.2": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:color@0.11.3": {
      "map": {
        "color-convert": "npm:color-convert@1.3.1",
        "color-string": "npm:color-string@0.3.0",
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:js-yaml@3.6.1": {
      "map": {
        "argparse": "npm:argparse@1.0.7",
        "esprima": "npm:esprima@2.7.2"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:argparse@1.0.7": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:clap@1.1.1": {
      "map": {
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0"
      }
    },
    "npm:buffer@4.7.0": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.1.2",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:redux@3.5.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "lodash": "npm:lodash@4.13.1",
        "symbol-observable": "npm:symbol-observable@0.2.4",
        "lodash-es": "npm:lodash-es@4.13.1"
      }
    },
    "npm:react@15.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "fbjs": "npm:fbjs@0.8.3"
      }
    },
    "npm:sofe@1.4.1": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:fbjs@0.8.3": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "loose-envify": "npm:loose-envify@1.2.0",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "immutable": "npm:immutable@3.8.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "core-js": "npm:core-js@1.2.6"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
        "node-fetch": "npm:node-fetch@1.5.3"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:node-fetch@1.5.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "pako": "npm:pako@0.2.8"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.4",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.2"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.4",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.6.2"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:asn1.js@4.6.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.4",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:babel-preset-react@6.11.1": {
      "map": {
        "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.8.0",
        "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.8.0",
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.8.0",
        "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
        "babel-plugin-transform-react-jsx-self": "npm:babel-plugin-transform-react-jsx-self@6.11.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
        "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.9.0"
      }
    },
    "npm:babel-plugin-transform-flow-strip-types@6.8.0": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.8.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-react-jsx-self@6.11.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-react-jsx-source@6.9.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-react-display-name@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-syntax-flow@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-syntax-jsx@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@4.13.1",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-types@6.11.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@4.13.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2",
        "babel-traverse": "npm:babel-traverse@6.10.4"
      }
    },
    "npm:babel-runtime@6.9.2": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:babel-traverse@6.10.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "lodash": "npm:lodash@4.13.1",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-code-frame": "npm:babel-code-frame@6.11.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "invariant": "npm:invariant@2.2.1",
        "debug": "npm:debug@2.2.0",
        "babylon": "npm:babylon@6.8.2",
        "globals": "npm:globals@8.18.0"
      }
    },
    "npm:babel-code-frame@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@2.0.0",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babylon@6.8.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:babel-preset-stage-1@6.5.0": {
      "map": {
        "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.8.0",
        "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0",
        "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.8.0",
        "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.10.2",
        "babel-preset-stage-2": "npm:babel-preset-stage-2@6.11.0"
      }
    },
    "npm:babel-plugin-transform-class-constructor-call@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.8.0"
      }
    },
    "npm:babel-plugin-transform-export-extensions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.8.0"
      }
    },
    "npm:babel-plugin-transform-class-properties@6.10.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.8.0"
      }
    },
    "npm:babel-plugin-transform-decorators@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
        "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0"
      }
    },
    "npm:babel-helper-define-map@6.9.0": {
      "map": {
        "babel-types": "npm:babel-types@6.11.1",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "lodash": "npm:lodash@4.13.1",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
      }
    },
    "npm:babel-plugin-syntax-class-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-syntax-export-extensions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-template@6.9.0": {
      "map": {
        "babel-types": "npm:babel-types@6.11.1",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "lodash": "npm:lodash@4.13.1",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babylon": "npm:babylon@6.8.2"
      }
    },
    "npm:babel-plugin-syntax-class-constructor-call@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-syntax-decorators@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-helper-explode-class@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0"
      }
    },
    "npm:babel-helper-function-name@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
      }
    },
    "npm:babel-helper-bindify-decorators@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:babel-helper-get-function-arity@6.8.0": {
      "map": {
        "babel-types": "npm:babel-types@6.11.1",
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-preset-stage-2@6.11.0": {
      "map": {
        "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0",
        "babel-preset-stage-3": "npm:babel-preset-stage-3@6.11.0"
      }
    },
    "npm:babel-plugin-transform-object-rest-spread@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.8.0"
      }
    },
    "npm:babel-preset-stage-3@6.11.0": {
      "map": {
        "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.8.0",
        "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
        "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0"
      }
    },
    "npm:babel-plugin-syntax-trailing-function-commas@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0",
        "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.8.0"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.11.2",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0"
      }
    },
    "npm:babel-plugin-syntax-object-rest-spread@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.11.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
      }
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.8.0"
      }
    },
    "npm:babel-plugin-syntax-async-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-syntax-exponentiation-operator@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-helper-explode-assignable-expression@6.8.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.11.1"
      }
    },
    "npm:react-draggable@2.1.2": {
      "map": {
        "classnames": "npm:classnames@2.2.5"
      }
    }
  }
});
