import React from 'react'
import { TodoProviderContainer } from '../src/hooks/useTodo/TodoProviderContainer'
import { initializeWorker, maswDecorator } from 'msw-storybook-addon';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((story) => {
  <TodoProviderContainer>{story()}</TodoProviderContainer>
});

initializeWorker();
addDecorator(maswDecorator)
