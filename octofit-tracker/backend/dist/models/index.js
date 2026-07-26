import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    fitnessLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    goals: [{ type: String }],
    team: { type: String, default: '' },
}, { timestamps: true });
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    sport: { type: String, required: true },
    captain: { type: String, required: true },
    members: [{ type: String }],
    focus: { type: String, required: true },
}, { timestamps: true });
const activitySchema = new Schema({
    userName: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceKm: { type: Number, default: 0 },
    intensity: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    date: { type: Date, default: Date.now },
}, { timestamps: true });
const leaderboardSchema = new Schema({
    userName: { type: String, required: true },
    score: { type: Number, required: true },
    rank: { type: Number, required: true },
    streakDays: { type: Number, default: 0 },
}, { timestamps: true });
const workoutSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    equipment: [{ type: String }],
    targetArea: { type: String, required: true },
}, { timestamps: true });
export const User = mongoose.model('User', userSchema);
export const Team = mongoose.model('Team', teamSchema);
export const Activity = mongoose.model('Activity', activitySchema);
export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardSchema);
export const Workout = mongoose.model('Workout', workoutSchema);
