class CrudService {
    constructor(repository){
        this.repository = repository;
    }


    async create(data){

        try {
            
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in Crud service layer");
            throw{error};
        }
    }

    async destroy(modelId){

        try {
            const response = await this.repository.destroy({
                where : {
                    id : modelId
                }
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in Crud service layer");
            throw{error};
        }
    }

    async get(modelId){

        try {
            const response = await this.repository.findByPk(modelId);
            return response;
        } catch (error) {
            console.log("Something went wrong in Crud service layer");
            throw{error};
        }
    }

    async getAll(){

        try {
            const response = await this.repository.findAll();
            return response;

        } catch (error) {
            console.log("Something went wrong in Crud service layer");
            throw{error};
        }
    }

    async update(modelId, data){

        try {
            
            const response = await this.repository.update(data,{

                where : {
                    id : modelId
                }
            })
            return response;
        } catch (error) {
            console.log("Something went wrong in Crud service layer");
            throw{error};
        }
    }
}

module.exports = CrudService;