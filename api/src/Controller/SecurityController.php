<?php


namespace App\Controller;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends BaseAbstractController
{
    /**
     * @Route("/api/login_check", name="login_check")
     */
    public function login(): JsonResponse
    {
        $user = $this->getUser();

        return $this->successJsonResponse([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
        ]);
    }
}
