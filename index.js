module.exports = {
    // Map of hooks
    hooks: {
        "page": function(page) {
        page.content = page.content + ' \
<link rel="stylesheet" \
      type="text/css" \
      href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css"> \
<script> \
    window.klipse_settings = { \
        selector: \'.language-klipse\' \
    }; \
</script> \
<script src="https://storage.googleapis.com/app.klipse.tech/plugin/js/klipse_plugin.js"></script>'
        page.content = page.content.replace("<b>", "<strong>")
            .replace("</b>", "</strong>");
        return page;
    }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
