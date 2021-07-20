const flights = require('../Models/FlightModel');

exports.create=(req,res)=>{
    
        
        if(!req.body)
        {
            return res.status(400).send({
                Message:"Content cannot be empty"
            })
        }
    
        const flight = new flights ({ 
            FlightName : req.body.FlightName,
            Owner : req.body.Owner,
            Route : req.body.Route,
            Timings: req.body.Timings,
        });
    
        flight.save()
        
        .then(data=>{
            res.json({data});
        })
        .catch(err=>{
            res.status(500).send({
                Message:err.message || "Some error occured"
            })
        })
    
        
    
}

exports.Showall=(req,res)=>{
    flights.find()
    .select('FlightName Owner Route _id')
    .populate('Route Timings','Arrive Destination ArrivalTime DepartureTime')
    .exec()
    .then((docs)=>{
        const response={
            count:docs.length,
            data:docs.map(doc=>{
                return{
                    _id:doc._id,
                    FlightName:doc.FlightName,
                    Owner:doc.Owner,
                    Route:doc.Route,
                    Timings:doc.Timings,
                    
                }
            })
        }
        res.json(response);

    }).catch((err)=>{
        res.status(500).send({
            Message:err.message||"Some error occured"
        })
    })
}