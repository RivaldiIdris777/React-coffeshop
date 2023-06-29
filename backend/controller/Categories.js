import Categories from "../models/CategoryModel.js";

export const getCategory = async(req, res) =>{
    try {
        const response = await Categories.findAll({
            attributes:['uuid','name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getCategoryById = async(req, res) =>{
    try {
        const response = await Categories.findOne({
            attributes:['uuid','name'],
            where: {
                uuid: req.params.uuid
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createCategory = async(req, res) =>{
    const {name} = req.body;        
    try {
        await Categories.create({
            name: name,            
        });
        res.status(201).json({msg: "Kategori Berhasil Ditambahkan"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateCategory = async(req, res) =>{
    const category = await Categories.findOne({
        where: {
            uuid: req.params.uuid
        }
    });
    const {name} = req.body;
    try {
        await Categories.update({
            name: name,            
        },{
            where:{
                uuid: category.uuid
            }
        });
        res.status(200).json({msg: "Category Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteCategory = async(req, res) =>{
    const category = await Categories.findOne({
        where: {
            uuid: req.params.uuid
        }
    });
    if(!category) return res.status(404).json({msg: "Kategori tidak ditemukan"});
    try {
        await Categories.destroy({
            where:{
                uuid: category.uuid
            }
        });
        res.status(200).json({msg: "Kategori Terhapus"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}