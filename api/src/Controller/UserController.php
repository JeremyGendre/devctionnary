<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Service\UserService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/users")
 */
class UserController extends BaseAbstractController
{
    /**
     * @Route("/me", name="users_get_me", methods={"GET"})
     */
    public function getMe(
        SerializerInterface $serializer,
        UserRepository $userRepository
    ): JsonResponse
    {        
        return $this->successJsonResponse($serializer->serialize($this->getUser(), 'json', ['groups' => 'getMe']));
    }

    /**
     * @Route("/me", name="users_patch_me", methods={"PATCH"})
     */
    public function patchMe(
        SerializerInterface $serializer,
        UserRepository $userRepository,
        Request $request,
        UserService $userService
    ): JsonResponse
    {
        $userService->patchUser($this->getUser(), json_decode($request->getContent(), true));

        return $this->successJsonResponse($serializer->serialize($this->getUser(), 'json', ['groups' => 'getMe']));
    }

    /**
     * @Route("/me", name="users_delete_me", methods={"DELETE"})
     */
    public function deleteMe(
        UserRepository $userRepository,
        UserService $userService
    ): JsonResponse
    {
        $userService->deleteUser($this->getUser());

        return $this->emptyJsonResponse();
    }
}