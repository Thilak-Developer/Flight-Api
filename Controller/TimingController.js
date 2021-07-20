const timings= require('../Models/TimingModel');


exports.NewOne=(req,res)=>{
 
    if(!req.body)
    {
        return res.status(400).send({
            Message:"Content cannot be empty"
        })
    }

    const timing = new timings ({ 
        ArrivalTime : req.body.ArrivalTime,
        DepartureTime : req.body.DepartureTime
    });

    timing.save()
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
    
    timings.find()
    .select('DepartureTime ArrivalTime _id')
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(400).send({
            Message:err.message||"Some error occured while retrieving"
        })
    })
}

