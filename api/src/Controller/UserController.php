<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Service\UserManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/users")
 */
class UserController extends BaseAbstractController
{
    /**
     * @Route("/me", name="users_get_me", methods={"GET"})
     */
    public function getMe(
        SerializerInterface $serializer
    ): JsonResponse
    {
        return $this->successJsonResponse($serializer->serialize($this->getUser(), 'json', ['groups' => 'getMe']));
    }

    /**
     * @Route("/me", name="users_patch_me", methods={"PATCH"})
     */
    public function patchMe(
        SerializerInterface $serializer,
        Request $request,
        UserManager $userManager
    ): JsonResponse
    {
        $userManager->patchUser($this->getUser(), json_decode($request->getContent(), true));

        return $this->successJsonResponse($serializer->serialize($this->getUser(), 'json', ['groups' => 'getMe']));
    }

    /**
     * @Route("/me", name="users_delete_me", methods={"DELETE"})
     */
    public function deleteMe(): JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $this->em->remove($this->getUser());
        $this->em->flush();

        return $this->emptyJsonResponse();
    }
}