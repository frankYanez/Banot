import { expect, test, type Page } from '@playwright/test'

const getDocumentThemeClass = async (page: Page) => {
  return page.evaluate(() => document.documentElement.className)
}

test.describe('UI settings toolbar', () => {
  test('allows toggling theme and animations', async ({ page }) => {
    await page.goto('/')

    const themeToolbar = page.getByRole('complementary', {
      name: 'Preferencias de experiencia',
    })
    await expect(themeToolbar).toBeVisible()

    const darkButton = themeToolbar.getByRole('button', { name: /oscuro/i })
    await darkButton.click()
    await expect.poll(async () => getDocumentThemeClass(page)).toContain('dark')

    const animationSwitch = themeToolbar.getByRole('switch', {
      name: /animaciones vivas/i,
    })
    await expect(animationSwitch).toHaveAttribute('aria-checked', 'true')
    await animationSwitch.click()
    await expect(animationSwitch).toHaveAttribute('aria-checked', 'false')
  })

  test('is responsive across breakpoints', async ({ page }) => {
    await page.goto('/')

    const grid = page.getByRole('list')
    await expect(grid).toBeVisible()

    await page.setViewportSize({ width: 1280, height: 800 })
    await expect(grid).toBeVisible()

    await page.setViewportSize({ width: 768, height: 800 })
    await expect(grid).toBeVisible()

    await page.setViewportSize({ width: 375, height: 800 })
    await expect(grid).toBeVisible()
  })
})
