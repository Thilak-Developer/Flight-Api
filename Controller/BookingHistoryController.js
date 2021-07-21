const bookings= require('../Models/BookingHistory');


exports.NewOne=(req,res)=>{
    
    if(!req.body)
    {
        return res.status(400).send({
            Message:"Content cannot be empty"
        })
    }

    const booking = new bookings ({ 
        MobileNumber : req.body.MobileNumber,
        LastBooking : req.body.LastBooking,
        TotalBooking : req.body.TotalBooking
    });

    booking.save()
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
   
    bookings.
     aggregate([{ $match: { TotalBooking: { $gte: 14 }}}])
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(400).send({
            Message:err.message||"Some error occured while retrieving"
        })
    })
}

