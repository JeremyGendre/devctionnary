<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $biography;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Snippet::class, mappedBy="author", orphanRemoval=true)
     */
    private $snippets;

    /**
     * @ORM\OneToMany(targetEntity=Vote::class, mappedBy="voter", orphanRemoval=true)
     */
    private $votes;

    /**
     * @ORM\OneToMany(targetEntity=SnippetValidation::class, mappedBy="validator")
     */
    private $snippetValidations;

    public function __construct()
    {
        $this->snippets = new ArrayCollection();
        $this->votes = new ArrayCollection();
        $this->snippetValidations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getBiography(): ?string
    {
        return $this->biography;
    }

    public function setBiography(?string $biography): self
    {
        $this->biography = $biography;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

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

    /**
     * @return Collection|Snippet[]
     */
    public function getSnippets(): Collection
    {
        return $this->snippets;
    }

    public function addSnippet(Snippet $snippet): self
    {
        if (!$this->snippets->contains($snippet)) {
            $this->snippets[] = $snippet;
            $snippet->setAuthor($this);
        }

        return $this;
    }

    public function removeSnippet(Snippet $snippet): self
    {
        if ($this->snippets->removeElement($snippet)) {
            // set the owning side to null (unless already changed)
            if ($snippet->getAuthor() === $this) {
                $snippet->setAuthor(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Vote[]
     */
    public function getVotes(): Collection
    {
        return $this->votes;
    }

    public function addVote(Vote $vote): self
    {
        if (!$this->votes->contains($vote)) {
            $this->votes[] = $vote;
            $vote->setVoter($this);
        }

        return $this;
    }

    public function removeVote(Vote $vote): self
    {
        if ($this->votes->removeElement($vote)) {
            // set the owning side to null (unless already changed)
            if ($vote->getVoter() === $this) {
                $vote->setVoter(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|SnippetValidation[]
     */
    public function getSnippetValidations(): Collection
    {
        return $this->snippetValidations;
    }

    public function addSnippetValidation(SnippetValidation $snippetValidation): self
    {
        if (!$this->snippetValidations->contains($snippetValidation)) {
            $this->snippetValidations[] = $snippetValidation;
            $snippetValidation->setValidator($this);
        }

        return $this;
    }

    public function removeSnippetValidation(SnippetValidation $snippetValidation): self
    {
        if ($this->snippetValidations->removeElement($snippetValidation)) {
            // set the owning side to null (unless already changed)
            if ($snippetValidation->getValidator() === $this) {
                $snippetValidation->setValidator(null);
            }
        }

        return $this;
    }
}
