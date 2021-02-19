<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Service\UserManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
     * @IsGranted("ROLE_USER")
     * @Route("/me", name="users_get_me", methods={"GET"})
     * @param SerializerInterface $serializer
     * @return JsonResponse
     */
    public function getMe(
        SerializerInterface $serializer
    ): JsonResponse
    {
        return $this->successJsonResponse(['user' => $serializer->serialize($this->getUser(), 'json', ['groups' => 'getMe'])]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/me", name="users_patch_me", methods={"PATCH"})
     * @param SerializerInterface $serializer
     * @param Request $request
     * @param UserManager $userManager
     * @param UserRepository $userRepository
     * @return JsonResponse
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
     * @IsGranted("ROLE_USER")
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
     * @param UserRepository $userRepository
     * @param string $username
     * @return JsonResponse
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
