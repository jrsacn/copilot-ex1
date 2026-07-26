import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';
const router = Router();
function getApiBaseUrl() {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
}
function sendCollection(res, resource, items) {
    res.json({
        resource,
        baseUrl: getApiBaseUrl(),
        count: items.length,
        results: items,
    });
}
router.get('/users/', async (_req, res) => {
    const users = await User.find({}).lean();
    sendCollection(res, 'users', users);
});
router.get('/teams/', async (_req, res) => {
    const teams = await Team.find({}).lean();
    sendCollection(res, 'teams', teams);
});
router.get('/activities/', async (_req, res) => {
    const activities = await Activity.find({}).lean();
    sendCollection(res, 'activities', activities);
});
router.get('/leaderboard/', async (_req, res) => {
    const leaderboard = await LeaderboardEntry.find({}).lean();
    sendCollection(res, 'leaderboard', leaderboard);
});
router.get('/workouts/', async (_req, res) => {
    const workouts = await Workout.find({}).lean();
    sendCollection(res, 'workouts', workouts);
});
export default router;
