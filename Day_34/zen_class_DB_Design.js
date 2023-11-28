/*
    Design database for zen class programme

    List of Collection:
        - users
        - codekata 
        - attendance
        - topics 
        - tasks 
        - company_drives 
        - mentors 

    Relationships: pannala
        - Users to Codekata: One-to-Many         (One user can have multiple codekata records.)
        - Users to Tasks: One-to-Many            (One user can have multiple tasks.)
        - Company Drives to Users: Many-to-Many   (Many users can participate in multiple company drives, and a company drive can have multiple participants.)

    List of Collection and Fields:

        1. users:
            - _id (ObjectId)
            - name (String)
            - email (String)
            - enrollment_date (Date)
            - mentor_id (ObjectId, references mentors collection)
        
        2. codekata:
            - _id (ObjectId)
            - user_id (ObjectId, references users collection)
            - problems_solved (Number)
            - date (Date)

        3. attendance :
            - _id (ObjectId)
            - user_id (ObjectId, references users collection)
            - date (Date)
            - status (String, "present" or "absent")

        4. topics:
            - _id (ObjectId)
            - name (String)

        5. tasks:
            - _id (ObjectId)
            - user_id (ObjectId, references users collection)
            - topic_id (ObjectId, references topics collection)
            - date (Date)
            - status (String, "submitted" or "not submitted")

        6. company_drives:
            - _id (ObjectId)
            - name (String)
            - date (Date)
            - participants (Array of ObjectId, references users collection)
        
        7. mentors:
            - _id (ObjectId)
            - name (String)
            - mentee_count (Number)
            - Sample Document:

*/

/*

    Questions:
        1.Find all the topics and tasks which are thought in the month of October
            Ans: db.tasks.find({ "date": { $gte: ISODate("2022-10-01"), $lt: ISODate("2022-11-01") } })

        2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
            Ans: db.company_drives.find({ "date": { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") } })

        3.Find all the company drives and students who are appeared for the placement.
            Ans: db.company_drives.find({}, { "name": 1, "participants": 1 })

        4.Find the number of problems solved by the user in codekata
            Ans: db.codekata.aggregate([
                    { $match: { "user_id": ObjectId("user_id") } },
                    { $group: { _id: null, total_problems_solved: { $sum: "$problems_solved" } } }
                    ])

        5.Find all the mentors with who has the mentee's count more than 15
            Ans: db.mentors.find({ "mentee_count": { $gt: 15 } })

        6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
            Ans: db.users.count({
                "_id": { $in: db.attendance.find({ "date": { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") }, "status": "absent" }).map(u => u.user_id) },
                "_id": { $in: db.tasks.find({ "date": { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") }, "status": "not submitted" }).map(u => u.user_id) }
})

*/
