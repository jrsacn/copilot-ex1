import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';
const router = Router();
function sendCollection(req, res, resource, items) {
    res.json({
        resource,
        baseUrl: req.app.locals.apiBaseUrl || 'http://localhost:8000',
        count: items.length,
        results: items,
    });
}
router.get('/users/', async (req, res) => {
    const users = await User.find({}).lean();
    sendCollection(req, res, 'users', users);
});
router.get('/teams/', async (req, res) => {
    const teams = await Team.find({}).lean();
    sendCollection(req, res, 'teams', teams);
});
router.get('/activities/', async (req, res) => {
    const activities = await Activity.find({}).lean();
    sendCollection(req, res, 'activities', activities);
});
router.get('/leaderboard/', async (req, res) => {
    const leaderboard = await LeaderboardEntry.find({}).lean();
    sendCollection(req, res, 'leaderboard', leaderboard);
});
router.get('/workouts/', async (req, res) => {
    const workouts = await Workout.find({}).lean();
    sendCollection(req, res, 'workouts', workouts);
});
export default router;
