import { expect, userEvent, within } from '@storybook/test';

import { Page } from '.';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

export const LoggedIn = {
  play: async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
