import mongoose from 'mongoose';
import { User, Team, Activity, LeaderboardEntry, Workout } from '../models/index.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data.
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        console.log('Seed the octofit_db database with test data');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            LeaderboardEntry.deleteMany({}),
            Workout.deleteMany({}),
        ]);
        const users = await User.insertMany([
            {
                name: 'Ava Chen',
                email: 'ava@example.com',
                age: 29,
                fitnessLevel: 'Advanced',
                goals: ['Run a 10K', 'Improve mobility'],
                team: 'North Stars',
            },
            {
                name: 'Noah Patel',
                email: 'noah@example.com',
                age: 34,
                fitnessLevel: 'Intermediate',
                goals: ['Increase endurance', 'Train for a triathlon'],
                team: 'River Runners',
            },
            {
                name: 'Mia Alvarez',
                email: 'mia@example.com',
                age: 27,
                fitnessLevel: 'Beginner',
                goals: ['Build consistency', 'Lose 5kg'],
                team: 'North Stars',
            },
        ]);
        await Team.insertMany([
            {
                name: 'North Stars',
                sport: 'Running',
                captain: users[0].name,
                members: users.slice(0, 2).map((user) => user.name),
                focus: 'Endurance and community challenges',
            },
            {
                name: 'River Runners',
                sport: 'Cycling',
                captain: users[1].name,
                members: [users[1].name, users[2].name],
                focus: 'Weekly long rides and recovery',
            },
        ]);
        await Activity.insertMany([
            {
                userName: users[0].name,
                type: 'Run',
                durationMinutes: 35,
                distanceKm: 5.6,
                intensity: 'High',
                date: new Date('2026-07-20'),
            },
            {
                userName: users[1].name,
                type: 'Cycling',
                durationMinutes: 60,
                distanceKm: 24,
                intensity: 'Medium',
                date: new Date('2026-07-21'),
            },
            {
                userName: users[2].name,
                type: 'Yoga',
                durationMinutes: 30,
                intensity: 'Low',
                date: new Date('2026-07-22'),
            },
        ]);
        await LeaderboardEntry.insertMany([
            { userName: users[0].name, score: 1250, rank: 1, streakDays: 12 },
            { userName: users[1].name, score: 1180, rank: 2, streakDays: 8 },
            { userName: users[2].name, score: 980, rank: 3, streakDays: 5 },
        ]);
        await Workout.insertMany([
            {
                title: 'HIIT Cardio Blast',
                category: 'Cardio',
                durationMinutes: 25,
                difficulty: 'Intermediate',
                equipment: ['Jump rope'],
                targetArea: 'Full body',
            },
            {
                title: 'Core Strength Flow',
                category: 'Strength',
                durationMinutes: 30,
                difficulty: 'Beginner',
                equipment: ['Yoga mat'],
                targetArea: 'Core',
            },
            {
                title: 'Tempo Cycling Session',
                category: 'Cycling',
                durationMinutes: 45,
                difficulty: 'Advanced',
                equipment: ['Bike'],
                targetArea: 'Legs',
            },
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
