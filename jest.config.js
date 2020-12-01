module.exports = {
    moduleFileExtensions: ["js", "ts"],
    transform: {
        "^.+\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    },
    testMatch: ["<rootDir>/tests/**/*.test.ts"],
    projects: ['<rootDir>/apps/mf-app', '<rootDir>/libs/my-lib', '<rootDir>/libs/my-lib-first'],
};