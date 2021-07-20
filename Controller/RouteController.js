const routes= require('../Models/RouteModel');


exports.NewOne=(req,res)=>{
    
    if(!req.body)
    {
        return res.status(400).send({
            Message:"Content cannot be empty"
        })
    }

    const route = new routes ({ 
        Arrive : req.body.Arrive,
        Destination : req.body.Destination
    });

    route.save()
    .then(data=>{
        res.json({data});
    })
    .catch(err=>{
        res.status(500).send({
            Message:err.message || "Some error occured"
        })
    })

    
}

exports.getall=(req,res)=>{
   
    routes.find()
    .select('Arrive Destination _id')
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(400).send({
            Message:err.message||"Some error occured while retrieving"
        })
    })
}

