'use strict'

const Product = use("App/Models/Product")

class ProductController {
    async allProduct({request, response}){
        try {
            const product = await Product.query().paginate(1,25)
            response.status(200).json({
                product
            })
        } catch (error) {
            response.status(500).json({
                messages: 'Internal Server Error'
            })
        }

    }

    async store({request, response}){
        try {
            const input = request.all()
            const cekProduct = await Product.query().where('name',input.name).getCount()
            if(cekProduct > 0){
                console.log('ada')
                response.status(203).json({
                    messages : 'Product allready exist'
                })
            }else{
                const newProduct = new Product()
                newProduct.name = input.name
                newProduct.price = input.price
                newProduct.image_url = input.image_url
                await newProduct.save()
                response.status(200).json({
                    messages : 'Save Product Success'
                })
            }

        } catch (error) {
            response.status(500).json({
                messages: 'Internal Server Error'
            })
        }
    }
}

module.exports = ProductController
