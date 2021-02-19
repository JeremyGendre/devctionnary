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
        return $this->successJsonResponse(['user' => $serializer->serialize($this->getUser(), 'json', ['groups' => 'getMe'])]);
    }

    /**
     * @Route("/me", name="users_patch_me", methods={"PATCH"})
     */
    public function patchMe(
        SerializerInterface $serializer,
        Request $request,
        UserManager $userManager,
        UserRepository $userRepository
    ): JsonResponse
    {
        if ($request->request->get('username') !== $this->getUser()->getUsername()) {
            $existingUser = $userRepository->findOneBy(['username' => $request->request->get('username')]);
            if($existingUser){
                return $this->errorJsonResponse("Un utilisateur existe déjà avec le nom '" . $existingUser->getUsername() . "'");
            }
        }

        $userManager->patchUser($this->getUser());

        $em = $this->getDoctrine()->getManager();
        $em->flush();

        return $this->successJsonResponse($serializer->serialize($this->getUser(), 'json', ['groups' => 'getMe']));
    }

    /**
     * @Route("/me", name="users_delete_me", methods={"DELETE"})
     */
    public function deleteMe(): JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($this->getUser());
        $em->flush();

        return $this->emptyJsonResponse();
    }

    /**
     * @Route("/username-availability/{username}", name="users_username_availability", methods={"GET"})
     */
    public function getUsernameAvailability(
        UserRepository $userRepository,
        string $username
    ): JsonResponse
    {
        if ($username !== $this->getUser()->getUsername()) {
            $existingUser = $userRepository->findOneBy(['username' => $username]);
            if($existingUser){
                return $this->successJsonResponse(['available' => false]);
            }
        }
        
        return $this->successJsonResponse(['available' => true]);
    }
}