module.exports = {
    'GET /articles'(req, res) {
        return res.json({
            code: 0,
            articles: [{
                date: '7-22',
                items: [{
                    title: 'hhhh',
                    pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2949605567,2541764746&fm=26&gp=0.jpg',
                    id: 1
                },
                {
                    title: 'aaaa',
                    pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2949605567,2541764746&fm=26&gp=0.jpg',
                    id: 2
                },
                {
                    title: 'bbbb',
                    pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2949605567,2541764746&fm=26&gp=0.jpg',
                    id: 3
                }]
            },
            {
                date: '7-21',
                items: [{
                    title: 'qqqq',
                    pic: 'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
                    id: 4
                },
                {
                    title: 'cccc',
                    pic: 'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
                    id: 5
                },
                {
                    title: 'ffff',
                    pic: 'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
                    id: 6
                }]
            },
            ]
        })
    }
}
