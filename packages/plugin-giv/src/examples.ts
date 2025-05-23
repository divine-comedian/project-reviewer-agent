import type { ActionExample } from "@elizaos/core";

export const getProjectsExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "I wonder what projects are currently top boosted with GIVpower?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me fetch the projects from GIV.",
                action: "BOOSTED_GIVETH_PROJECTS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Show me the most popular GIV projects right now",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll retrieve the top boosted projects from GIV for you.",
                action: "BOOSTED_GIVETH_PROJECTS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Which projects have the most GIVpower?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check which projects currently have the most GIVpower boost.",
                action: "BOOSTED_GIVETH_PROJECTS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What are the trending projects on Giveth?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll fetch the trending projects based on GIVpower boosts.",
                action: "BOOSTED_GIVETH_PROJECTS",
            },
        },
    ],
];

export const getPendingVouchedProjectsExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What projects should get the vouched status?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check which projects should get the vouched status.",
                action: "PENDING_VOUCHED_PROJECTS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What are the projects I should update their vouched status?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me check which projects should get the vouched status.",
                action: "PENDING_VOUCHED_PROJECTS",
            },
        },
    ],
];

export const promoteTopProjectExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Tell me about the top project on Giveth right now.",
                action: "PROMOTE_TOP_PROJECT",
            },
        },
        
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the best project on Giveth right now?",
                action: "PROMOTE_TOP_PROJECT",
            },
        },
    ],
];

export const getRecentDonationsExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What are the recent donations to Giveth projects?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the recent donations to Giveth projects.",
                action: "RECENT_DONATIONS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Show me the latest 20 donations made on Giveth",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the latest 20 donations made on Giveth.",
                action: "RECENT_DONATIONS",
                take: 20,
            },
        },
    ],
];

export const donateTopBoostedExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {

                text: "Send a donation to the top boosted project on Giveth.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll help you donate to the top boosted project on Giveth.",
                action: "DONATE_TOP_BOOSTED",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you donate to the project with the most GIVpower?", 
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll help you donate to the project with the highest GIVpower boost.",
                action: "DONATE_TOP_BOOSTED",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Send out a tip to the top project on Giveth",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll assist you in donating to the most boosted project on Giveth.",
                action: "DONATE_TOP_BOOSTED", 
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Send some tokens to the top boosted project on Giveth.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll help you donate to the top boosted project on Giveth.",
                action: "DONATE_TOP_BOOSTED",
            },
        },
    ],
];
