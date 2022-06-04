import  mongoose  from 'mongoose'

const docEvaluation = new mongoose.Schema({
    
    Groupname:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    abstract:{
        type: Intl,
        required: true
    },
    problemIdentified:{
        type: Intl,
        required: true
    },
    clearyStated:{
        type: Intl,
        required: true
    },
    references:{
        type: Intl,
        required: true
    },
    modelframework:{
        type: Intl,
        required: true
    },
    MethoDescription:{
        type: Intl,
        required: true
    },
    appro:{
        type: Intl,
        required: true
    },
    dataCollect:{
        type: Intl,
        required: true
    },
    dataAnalys:{
        type: Intl,
        required: true
    },
    conclusionClarity:{
        type: Intl,
        required: true
    },
    relevent:{
        type: Intl,
        required: true
    },
    clearWritten:{
        type: Intl,
        required: true
    },
    logic:{
        type: Intl,
        required: true
    },
    Total:{
        type: Intl,
        required: true
    },
    Comment:{
        type: String,
        required: true
    },

    
});

const DocEvaluate=mongoose.model('DocEvaluate',docEvaluation);
export default DocEvaluate;