<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\VoteRepository;
use App\Service\Serializer\Serializable;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=VoteRepository::class)
 */
class Vote implements Serializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     *
     * @Assert\NotBlank
     */
    private $rating;

    /**
     * @ORM\Column(type="datetime")
     *
     * @Assert\NotBlank
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     *
     * @Assert\NotBlank
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="votes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $voter;

    /**
     * @ORM\ManyToOne(targetEntity=Snippet::class, inversedBy="votes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $snippet;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getVoter(): ?User
    {
        return $this->voter;
    }

    public function setVoter(?User $voter): self
    {
        $this->voter = $voter;

        return $this;
    }

    public function getSnippet(): ?Snippet
    {
        return $this->snippet;
    }

    public function setSnippet(?Snippet $snippet): self
    {
        $this->snippet = $snippet;

        return $this;
    }

    /**
     * @return array
     */
    public function serialize(): array
    {
        return [
            'id' => $this->getId(),
            'rating' => $this->getRating(),
            'voter_id' => $this->getVoter()->getId(),
            'snippet_id' => $this->getSnippet()->getId(),
            'createdAt' => $this->getCreatedAt()->format('d/m/Y H:i'),
            'updatedAt' => $this->getUpdatedAt()->format('d/m/Y H:i')
        ];
    }
}
