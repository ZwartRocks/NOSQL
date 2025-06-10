show dbs
use clases
db.Tarea.find()
db.Tarea.find().count()
db.Tarea.distinct('Job_Category')
db.Tarea.distinct('Platform')
db.Tarea.distinct('Experience_Level')
db.Tarea.distinct('Client_Region')
db.Tarea.distinct('Payment_Method')
db.Tarea.distinct('Project_Type')
db.Tarea.createIndex({Job_Completed:-1, Earnings_USD:-1})
db.Tarea.find().sort({Job_Completed:-1,Earnings_USD:-1}).limit(13)
db.Tarea.createIndex({Earnings_USD:-1})
db.Tarea.find().sort({Earnings_USD:-1}).limit(13)
db.Tarea.createIndex({Hourly_Rate:-1})
db.Tarea.find().sort({Hourly_Rate:-1, Earnings_USD:-1}).limit(13)
db.Tarea.createIndex({Job_Success_Rate:-1})
db.Tarea.find().sort({Job_Success_Rate:-1, Job_Completed:-1}).limit(13)
db.Tarea.createIndex({Client_Rating:-1})
db.Tarea.find().sort({Client_Rating:-1, Job_Completed:-1}).limit(13)
db.Tarea.createIndex({Job_Duration_Days:1, Rehire_Rate:-1})
db.Tarea.find().sort({Job_Duration_Days:1, Rehire_Rate:-1}).limit(13)
db.Tarea.find().sort({Rehire_Rate:-1, Job_Success_Rate:-1}).limit(13)
db.Tarea.createIndex({Marketing_Spend:-1})
db.Tarea.find().sort({Marketing_Spend:-1, Earnings_USD:-1}).limit(13)

db.Tarea.aggregate([{$match:{Job_Category:'App Development'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Job_Category:'Content Writing'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Job_Category:'Customer Support'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Job_Category:'Data Entry'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Job_Category:'Digital Marketing'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Job_Category:'Graphic Design'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Job_Category:'SEO'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Job_Category:'Web Development'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Platform:'Fiverr'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.findOne({},{Platform:"Freelancer"})
db.Tarea.distinct("Platform")

db.Tarea.aggregate([{$match:{Platform:{$regex:/^Freelancer$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Platform:'PeoplePerHour'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Platform:'Toptal'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Platform:'Upwork'}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Experience_Level:{$regex:/^Beginner$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Experience_Level:{$regex:/^Intermediate$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Experience_Level:{$regex:/^Expert$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Client_Region:{$regex:/^Asia$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Client_Region:{$regex:/^Australia$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Client_Region:{$regex:/^Canada$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Client_Region:{$regex:/^Europe$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Client_Region:{$regex:/^Middle East$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Client_Region:{$regex:/^UK$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Client_Region:{$regex:/^USA$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([
  { 
    $group: {
      _id: "$Job_Category",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])

db.Tarea.aggregate([
  { 
    $group: {
      _id: "$Platform",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])

db.Tarea.aggregate([
  { 
    $group: {
      _id: "$Experience_Level",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])

db.Tarea.aggregate([{$match:{Project_Type:{$regex:/^Hourly$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([{$match:{Project_Type:{$regex:/^Fixed$/i}}},
{
    $group: {
        _id: null,
        "max marketing":{$max:'$Marketing_Spend'},
        "average marketing":{$avg:'$Marketing_Spend'},
        "min marketing":{$min:'$Marketing_Spend'},
        
        "max job":{$max:'$Job_Completed'},
        "average job":{$avg:'$Job_Completed'},
        "min job":{$min:'$Job_Completed'},
        
        "max earning":{$max:'$Earnings_USD'},
        "average earnings":{$avg:'$Earnings_USD'},
        'min earnings':{$min:'$Earnings_USD'},
        
        "max rate":{$max:'$Hourly_Rate'},
        "average rate":{$avg:'$Hourly_Rate'},
        "min rate":{$min:'$Hourly_Rate'},
        
        "max success":{$max:'$Job_Success_Rate'},
        "average success":{$avg:'$Job_Success_Rate'},
        "min success":{$min:'$Job_Success_Rate'},
        
        "max rating":{$max:'$Client_Rating'},
        "average rating":{$avg:'$Client_Rating'},
        "min rating":{$min:'$Client_Rating'},
        
        "max duration":{$max:'$Job_Duration_Days'},
        "average duration":{$avg:'$Job_Duration_Days'},
        "min duration":{$min:'$Job_Duration_Days'},
        
        "max rehire":{$max:'$Rehire_Rate'},
        "average rehire":{$avg:'$Rehire_Rate'},
        "min rehire":{$min:'$Rehire_Rate'
}}])

db.Tarea.aggregate([
  { 
    $group: {
      _id: "$Client_Region",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])

db.Tarea.aggregate([
  { 
    $group: {
      _id: "$Payment_Method",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])

db.Tarea.aggregate([
  { 
    $group: {
      _id: "$Project_Type",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])

db.Tarea.insertOne({
    Job_Category: "Graphic Design",
    Platform: "Upwork",
    Experience_Level: "Beginner",
    Client_Region: "Australia",
    Payment_Method: "Crypto",
    Job_Completed: 151,
    Earnings_USD: 5017,
    Hourly_Rate: 52.58,
    Job_Success_Rate: 74.95,
    Client_Rating: 4.0,
    Job_Duration_Days: 45,
    Project_Type:"Fixed",
    Rehire_Rate: 44.56,
    Marketing_Spend: 248
});

db.Tarea.find({_id:ObjectId('67edcd3e2bd468ca90e8105d')})

db.Tarea.updateOne({_id:ObjectId('67edcd3e2bd468ca90e8105d'}, {$set:{Job_Category:'Web Development'}})

db.Tarea.find({_id:ObjectId('67edcd3e2bd468ca90e8105d')})

db.Tarea.find({_id:{
    $in:[
        ObjectId('67dac33d3161b0dbf2673506'),
        ObjectId('67dac33d3161b0dbf2673991'),
        ObjectId('67dac33d3161b0dbf267358b'),
        ObjectId('67dac33d3161b0dbf2673ade'),
        ObjectId('67dac33d3161b0dbf2673b2e')
        ]}})
db.Tarea.find({_id:{
    $in:[
        ObjectId('67dac33d3161b0dbf267357e'),
        ObjectId('67dac33d3161b0dbf26736ef'),
        ObjectId('67dac33d3161b0dbf26737ef'),
        ObjectId('67dac33d3161b0dbf2673646')
        ]
}})
db.Tarea.find({_id:{
    $in:[
        ObjectId('67dac33d3161b0dbf2673678')
        ]
}})
db.Tarea.find({_id:{
    $in:[
        ObjectId('67dac33d3161b0dbf2673a02'),
        ObjectId('67dac33d3161b0dbf26735d7')
        ]
}})
db.Tarea.find({_id:{
    $in:[
        ObjectId('67dac33d3161b0dbf26734e8'),
        ObjectId('67dac33d3161b0dbf26739e7')
        ]
}})