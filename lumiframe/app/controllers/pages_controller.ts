import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async home({ view }: HttpContext) {
    return view.render('index')
  }
  async search({ view }: HttpContext) {
    return view.render('search')
  }
  async services({ view }: HttpContext) {
    return view.render('services')
  }
  async display({ request, params, view }: HttpContext) {
    const id = params.id || request.input('id') || ''
    return view.render('display', { id })
  }
  async transaction({ view }: HttpContext) {
    return view.render('transaction')
  }
  async seller({ view }: HttpContext) {
    return view.render('seller')
  }
  async about({ view }: HttpContext) {
    return view.render('about')
  }
  async contact({ view }: HttpContext) {
    return view.render('contact')
  }
}
