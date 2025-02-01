// .storybook/test-runner.js
module.exports = {
    setup() {
      // Global setup (optional)
    },
    postRender: async (page, context) => {
      // Visual test for every story
      await expect(page).toHaveScreenshot(
        `${context.id}.png`
      );
    }
  };