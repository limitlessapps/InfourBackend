const Joi = require("@hapi/joi");

// bank 
exports.onValidateBank = data =>{
const schema = Joi.object({
    bank_name:Joi.array().items(Joi.string())
})
return schema.validate(data);
}

// assets 
exports.onValidateAssets = data =>{
    const schema = Joi.object({
        asset_name:Joi.array().items(Joi.string())
    })
    return schema.validate(data);
    }
// account 
exports.onValidateAccount = data =>{
    const schema = Joi.object({
        first_name:Joi.string().min(3).max(15),
        middle_name:Joi.string().min(3).max(15),
        surname:Joi.string().min(3).max(15),
        date_of_birth:Joi.date(),
        place_of_birth:Joi.string().min(3).max(15),
        sex:Joi.string().min(3).max(15),
        nationality:Joi.string().min(3).max(15),
        id_number:Joi.number(),
        martial_status:Joi.string(),
        country:Joi.string().min(3).max(15),
        province:Joi.string().min(3).max(15),
        district:Joi.string().min(3).max(15),
        cell:Joi.string().min(3).max(15),
        village:Joi.string().min(3).max(15),
        email:Joi.string().email(),
        email_work:Joi.string().email(),
        primary_number:Joi.string().min(3).max(15),
        secondary_number:Joi.string().min(3).max(15)
    })
    return schema.validate(data);
    }
// insurance
exports.onValidateInsurance = data =>{
    const schema = Joi.object({
        insurance_name:Joi.string().min(3).max(15),
        insurance_number:Joi.number(),
        telephone:Joi.string().min(3).max(15),
        date_of_birth:Joi.date(),
        expiration_date:Joi.date()

    })
    return schema.validate(data);
    }
// family 
exports.onValidateFamily = data =>{
    const schema = Joi.object({
        father_firstName:Joi.string().min(3).max(15),
        father_surname:Joi.string().min(3).max(15),
        mother_firstName:Joi.string().min(3).max(15),
        mother_SurName:Joi.string().min(3).max(15),
        spouse_firstName:Joi.string().min(3).max(15),
        spouse_Surname:Joi.string().min(3).max(15),
        spouseId:Joi.number(),
        spouseTelephone:Joi.string().min(3).max(15),
        children:Joi.array().items(Joi.string()),
        Dependency:Joi.string().min(3).max(15),
    })
    return schema.validate(data);
    }
// social_media
exports.onValidateSocial_media = data =>{
    const schema = Joi.object({
        twitter:Joi.string(),
        facebook:Joi.string(),
        instagram:Joi.string(),
        linkedin:Joi.string(),
        whatsup_number:Joi.string()
    })
    return schema.validate(data);
    }
    // student;
exports.onValidateStudent = data =>{
        const schema = Joi.object({
            school:Joi.string().min(3).max(15),
            country:Joi.string().min(3).max(15),
            province:Joi.string().min(3).max(15),
            district:Joi.string().min(3).max(15),
            street  :Joi.string().min(3).max(15)
        })
        return schema.validate(data);
        }
// self_employed 
exports.onValidateSelf_employed = data =>{
    const schema = Joi.object({
        business_type:Joi.string().min(3).max(15),
        business_name:Joi.string().min(3).max(15),
        tin_number:Joi.number(),
        country:Joi.string().min(3).max(15),
        province:Joi.string().min(3).max(15),
        district:Joi.string().min(3).max(15),
        street:Joi.string().min(3).max(15) 
    })
    return schema.validate(data);
    }
// employed 
exports.onValidateEmployed = data =>{
    const schema = Joi.object({
        company_name:Joi.string().min(3).max(15),
        position:Joi.string().min(3).max(15),
        country:Joi.string().min(3).max(15),
        province:Joi.string().min(3).max(15),
        district:Joi.string().min(3).max(15),
        street:Joi.string().min(3).max(15)
    })
    return schema.validate(data);
    }