import studentModel from "../models/student.js"

class studentController {

    static createDoc = async (req, res) => {
        // console.log("Create Doc Post Method")
        // console.log(req.body)
        try {
            const{name, age, fees} = req.body
             const doc = new studentModel({
                // name:name,
                // age:age,
                // fees:fees
                name,
                age,
                fees
             })
            //  Saving Document
            const result = await doc.save()
            // console.log(result)
        res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }
    static getAllDoc = async (req, res) =>{
        try {
            const result = await studentModel.find()
            // console.log(result)
            res.render("index", {data: result})
        }catch (error) {
            console.log(error)
        }
        
    }

    static editDoc = async (req, res) =>{
        // console.log(req.params.id)
        try {
            const result = await studentModel.findById(req.params.id)
            // console.log(result)
            res.redirect("edit", {data: result})
        } catch (error) {
            console.log(error)
        }
        
    }

    static updateDocById = async (req, res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/student")
    }

    static deleteDocById = async (req, res) =>{
        // console.log(req.params.id)
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default studentController