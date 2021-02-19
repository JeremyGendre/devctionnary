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
    public function errorJsonResponse(string $message = 'Une erreur est survenue'){
        return new JsonResponse([
            'success' => false,
            "message" => $message
        ]);
    }

    /**
     * @param $data
     * @return JsonResponse
     */
    protected function successJsonResponse($data = null){
        return new JsonResponse([
            'success' => true,
            'data' => $data
        ]);
    }
}
