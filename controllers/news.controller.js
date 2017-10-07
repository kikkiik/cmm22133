exports.index = function(req, res){
	let content = {
		banner: [{
			id: 1,
			url: '//image/img-1.jpg',
			title: 'news 1'

		},
		{
			id: 2,
			url: '//image/img-1.jpg', /*ต้องใส่ , เพื่อให้ขึ้นบรรทัดใหม่*/
			title: 'news 1'
		}
		]
	}

	res.json(content)

}

