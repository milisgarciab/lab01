import pytest
from calculadora import Calculadora


@pytest.fixture
def calc():
    return Calculadora()


def test_sumar(calc):
    assert calc.sumar(2, 3) == 5


def test_sumar_negativos(calc):
    assert calc.sumar(-2, -3) == -5


def test_restar(calc):
    assert calc.restar(5, 3) == 2


def test_multiplicar(calc):
    assert calc.multiplicar(4, 3) == 12


def test_multiplicar_por_cero(calc):
    assert calc.multiplicar(7, 0) == 0


def test_dividir(calc):
    assert calc.dividir(10, 2) == 5


def test_dividir_entre_cero(calc):
    with pytest.raises(ValueError):
        calc.dividir(10, 0)
