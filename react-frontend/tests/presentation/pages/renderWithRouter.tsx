import { BrowserRouter } from 'react-router-dom'
import { render, RenderResult } from '@testing-library/react'

export const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}): RenderResult => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, { wrapper: BrowserRouter })
  }
}
