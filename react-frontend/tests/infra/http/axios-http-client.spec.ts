import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { mockedAxiosResult, mockGetResquest, mockPostResquest } from '@/tests/data/mocks'
import axios from 'axios'

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  describe('PostClient', () => {
    it('Should call axios with correct values', async () => {
      const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce(mockedAxiosResult)
      const postRequest = mockPostResquest()
      const sut = makeSut()
      await sut.post(postRequest)
      expect(postSpy).toHaveBeenCalledWith(postRequest.url, postRequest.body)
    })

    it('Should return the correct statusCode and body', async () => {
      jest.spyOn(axios, 'post').mockResolvedValueOnce(mockedAxiosResult)
      const sut = makeSut()
      const httpResponse = await sut.post(mockPostResquest())
      expect(httpResponse).toEqual({
        statusCode: mockedAxiosResult.status,
        body: mockedAxiosResult.data
      })
    })

    it('Should return the correct statusCode and body on failure', async () => {
      jest.spyOn(axios, 'post').mockRejectedValueOnce({
        response: mockedAxiosResult
      })
      const sut = makeSut()
      const httpResponse = await sut.post(mockPostResquest())
      expect(httpResponse).toEqual({
        statusCode: mockedAxiosResult.status,
        body: mockedAxiosResult.data
      })
    })
  })
  describe('GetClient', () => {
    it('Should call axios with correct values', async () => {
      const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mockedAxiosResult)
      const getRequest = mockGetResquest()
      const sut = makeSut()
      await sut.get(getRequest)
      expect(getSpy).toHaveBeenCalledWith(getRequest.url, { headers: getRequest.headers })
    })

    it('Should return the correct statusCode and body on success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce(mockedAxiosResult)
      const sut = makeSut()
      const httpResponse = await sut.get(mockGetResquest())
      expect(httpResponse).toEqual({
        statusCode: mockedAxiosResult.status,
        body: mockedAxiosResult.data
      })
    })

    it('Should return the correct statusCode and body on failure', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce({
        response: mockedAxiosResult
      })
      const sut = makeSut()
      const httpResponse = await sut.get(mockGetResquest())
      expect(httpResponse).toEqual({
        statusCode: mockedAxiosResult.status,
        body: mockedAxiosResult.data
      })
    })
  })
})
