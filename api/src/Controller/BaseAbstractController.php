<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

class BaseAbstractController extends AbstractController
{
    /**
     * @param string $message
     * @return JsonResponse
     */
    public function errorJsonResponse(string $message = 'Une erreur est survenue', int $status = 500)
    {
        return new JsonResponse([
            'success' => false,
            "message" => $message
        ], $status);
    }

    /**
     * @param $data
     * @return JsonResponse
     */
    protected function successJsonResponse($data = null, int $status = 200)
    {
        return new JsonResponse([
            'success' => true,
            'data' => $data
        ], $status);
    }

    protected function emptyJsonResponse(int $status = 204)
    {
        return new JsonResponse(null, $status);
    }
}
