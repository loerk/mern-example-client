

export const getPosts = (req, res) => {
    res.json({
        id: req.userId,
        message: 'all posted messages !'
    });
}