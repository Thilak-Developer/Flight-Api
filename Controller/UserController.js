const users = require('../Models/UserModel');

exports.create=(req,res)=>{
    
        
        if(!req.body)
        {
            return res.status(400).send({
                Message:"Content cannot be empty"
            })
        }
    
        const user = new users ({ 
            Name : req.body.Name,
            Age : req.body.Age,
            MobileNumber : req.body.MobileNumber,
            
        });
    
        user.save()
        
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
    users
    .aggregate([
     
        { $lookup:
            {
               from: "bookings",
               localField: "MobileNumber",
               foreignField: "MobileNumber",
               as: "BookingHistory"
            }
        }
    ])
    .then(doc=>{
        res.status(200).json(doc)
    })

    .catch((err)=>{
        res.status(500).send({
            Message:err.message||"Some error occured"
        })
    })
}