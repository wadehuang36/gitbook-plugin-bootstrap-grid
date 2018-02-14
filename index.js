module.exports = {
    book: {
        assets: './assets',
        css: [
            'bootstrap-grid.min.css'
        ]
    },
    blocks: {
        row: {
            blocks: ['col'],
            process: function (rowBlock) {
                var tasks = rowBlock.blocks.map((block, i) => {
                    let cls = block.args.length == 0 ? "col" : "col-" + block.args[0];
                    return this.renderBlock('markdown', block.body)
                        .then(function (str) {
                            return `<div class="${cls}">\n${str}\n</div>`;
                        })

                });

                return Promise.all(tasks).then((columns) => {
                    return `<div class="row">\n${columns.join("\n")}\n</div>`;
                })
            }
        }
    }
}