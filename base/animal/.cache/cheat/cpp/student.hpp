#pragma once
#include "fn.hpp"

struct Animal {
    std::string especie;
    std::string barulho;
    int estagio;

    Animal(std::string especie = "", std::string barulho = ""):
        especie(especie), barulho(barulho), estagio(0) {
    }

    std::string fazerBarulho() const {
        if (estagio == 0) {
            return "---";
        }
        if (estagio == 4) {
            return "RIP";
        }
        return this->barulho;
    }

    void envelhecer(int nivel) {
        estagio += nivel;
        if (estagio >= 4) {
            fn::print("warning: {} morreu\n", especie);
            estagio = 4;
        }
    }

    std::string str() const {
        return fn::format("{}:{}:{}", especie, estagio, barulho);
    }
};

inline std::ostream& operator<<(std::ostream& os, const Animal& animal) {
    return os << animal.str();
}

struct Student {
    Animal animal;
    Student(std::string especie = "", std::string barulho = "") {
        animal = Animal(especie, barulho);
    }

    void grow(int nivel) {
        animal.envelhecer(nivel);
    }

    void noise() {
        std::cout << animal.fazerBarulho() << std::endl;
    }

    void show() {
        std::cout << animal.str() << std::endl;
    }
};

struct Debug {
    static const bool debug = false;
    static void run() {
        std::cout << "Debug ativado" << std::endl;
    }
};