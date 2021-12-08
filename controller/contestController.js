async function listContest(req, reply) {
    const contest = this.mongo.db.collection("contest");
    const result = await contest.find({}).toArray();
    // console.log(result);
    reply.code(200).send({"data" : result});
}

async function createContest(req,res) {
    const contest = this.mongo.db.collection("contest");
    const data = req.body;
    const result = await contest.insertOne(data);
    res.code(200).send(result);
}

module.exports = { listContest ,createContest};
