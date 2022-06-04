
import  mongoose  from 'mongoose'

const docSchema = new mongoose.Schema({
    
    Groupname:{
        type: String,
        required: true
    },
    introduction:{
        type: Intl,
        required: true
    },
    organization:{
        type: Intl,
        required: true
    },
    voiceInflection:{
        type: Intl,
        required: true
    },
    voiceRate:{
        type: Intl,
        required: true
    },
    tools:{
        type: Intl,
        required: true
    },
    eyeContact:{
        type: Intl,
        required: true
    },
    groupArrange:{
        type: Intl,
        required: true
    },
   
    Total:{
        type: Intl,
        required: true
    },

    
});

const PanelEve=mongoose.model('PanelEve',docSchema);
export default PanelEve;