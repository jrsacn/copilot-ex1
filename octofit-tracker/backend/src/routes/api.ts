import { Router } from 'express';

const router = Router();

function getApiBaseUrl() {
  const codespaceName = process.env.CODESPACE_NAME;
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
}

function sendCollection(res: any, resource: string, items: unknown[]) {
  res.json({
    resource,
    baseUrl: getApiBaseUrl(),
    count: items.length,
    results: items,
  });
}

router.get('/users/', (_req, res) => {
  sendCollection(res, 'users', [
    { id: 'user-1', name: 'Ava', role: 'Captain' },
    { id: 'user-2', name: 'Noah', role: 'Runner' },
  ]);
});

router.get('/teams/', (_req, res) => {
  sendCollection(res, 'teams', [
    { id: 'team-1', name: 'North Stars', members: 4 },
    { id: 'team-2', name: 'River Runners', members: 3 },
  ]);
});

router.get('/activities/', (_req, res) => {
  sendCollection(res, 'activities', [
    { id: 'activity-1', type: 'Run', duration: '30m' },
    { id: 'activity-2', type: 'Cycling', duration: '45m' },
  ]);
});

router.get('/leaderboard/', (_req, res) => {
  sendCollection(res, 'leaderboard', [
    { id: 'leader-1', name: 'Ava', score: 1250 },
    { id: 'leader-2', name: 'Noah', score: 1180 },
  ]);
});

router.get('/workouts/', (_req, res) => {
  sendCollection(res, 'workouts', [
    { id: 'workout-1', title: 'HIIT Cardio', difficulty: 'Intermediate' },
    { id: 'workout-2', title: 'Core Strength', difficulty: 'Beginner' },
  ]);
});

export default router;
