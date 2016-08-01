By Mingyang Li.

[TOC]

# Derivations

## PREREQ.: 4 types of charged species in a semiconductor

Their population densities are:

- Electrons: `n`
- Holes: `p`
- Positive donor ions: `N_d`
- Negative acceptor ions: `N_a`

## Starting with Microscopic Expression of Current...

Start with:
$$
j=nqv_d
$$

### … to Hall Effect

we have:
$$
v_d=\frac {j_x}{nq}
$$
The total force a charge carrier feels under Hall experiment is:
$$
F_y=q\epsilon_y\pm q(v_d\times B_z )
$$
where subscripts `y` and `z` indicates direcitons.

In steady state, 
$$
F_y=0\\
\Rightarrow q\epsilon_y =  q(v_d\times B_z )\\
\Rightarrow \epsilon_y =  v_d  B_z
$$
Insert the expression for `v_d` here:
$$
\epsilon_y =  \frac {j_x}{nq}  B_z
$$
Now we have one variable for each directions. Nice. By denoting the constant factor **as Hall coefficient**:
$$
R_H\equiv \frac1{nq}
$$
we can write:
$$
\epsilon_y=R_H j_x B_z
$$

### … to Ohm's Law

Since[^3]:
$$
v_d=\mu_dE
$$

[^3]: This equation, therefore also Ohm's Law, is only valid under low electric fields.

We can write:
$$
j=nq\mu_dE
$$
By writing the constants collectively as a "conductivity":
$$
\sigma=nq\mu_d
$$
we can simplify it to:
$$
j=\sigma E
$$
Which is the Ohm's Law.

Instead of writing w.r.t. conductivity, we often use the "resistivity":
$$
j=\sigma E=\frac E \rho \Leftrightarrow E=\rho j \text{ where } \rho\sigma=1
$$


## In A Depletion Region

### Depletion Approximation

#### Construction

Using n-type semiconductor as example, we use the **Possion's Equation**:
$$
\frac{d^2V}{dx^2}=-\frac{\rho(x)}\epsilon
$$
where `\rho` is the total charge concentration. In semiconductor region (i.e. NOT bulk region[^2]):
$$
\rho(x)\equiv
\begin{cases}
      e\cdot(p+N_d^+-n+N_a^-)  &  \text{in semiconductor region} \\
      0                                             & \text{in bulk region}
\end{cases}
$$

[^2]: This equation also infers that `V=0` across the whole bulk region, because there is no charge to generate the field.

which can be reduced by:

- Assuming a doped semiconductor:
  $$
  \rho(x)=e\cdot(p+N_d^+-n+N_a^-) \\
  \approx e\cdot(0+N_d^+-0+N_a^-) \\
  =  e\cdot(N_d^++N_a^-)
  $$

- Assuming a n-type:
  $$
  \rho(x)\approx  e\cdot(N_d^++0)\\
  = e\cdot N_d^+
  $$
  where `+` suggests "concentration of <u>ionized</u> donor atoms".

- Assuming all donor atoms have their e-'s ionized:
  $$
  \rho(x)\approx e\cdot N_d
  $$


Thus, this equation can be written as:
$$
\frac{d^2V}{dx^2}=-\frac{e\cdot N_d}\epsilon
$$
<u>Central idea of this approximation</u>: The carrier density of electrons `n` should stay `0` throughout the depletion region `0<=x<=d` at the N-side.

This gives the boundary conditions:
$$
V=0 \text{ @ } x=0\\
V=V_d+V_a\text{ @ }x\geq d
$$
where:

- `ε`: permittivity, a constant.
- `N_d`: population of donor ions (positively charged)
- `V_d`: depletion voltage
- `V_a`: applied voltage
- `e`: electron charge

#### Electric Field

Integrate for once, we have the **electric field along the depletion region on the n-side**:
$$
E(x)=-\frac{dV}{dx}=-\frac{eN_d}\epsilon (x-d)
$$

#### Voltage Potential

Integrate again, the solution is the **voltage potential along the depletion region on the n-side**:
$$
V(x)=-\frac{eN_d}\epsilon(\frac12x^2-dx)
$$

#### Depletion Length

Set `V(x) = V_d+V_a` (treat as constant) to find `d`:
$$
V(x=d)=-\frac{eN_d}\epsilon(\frac12d^2-d\cdot d)=V_d+V_a\\
\Rightarrow d=\sqrt{\frac{2\epsilon(V_d+V_a)}{e\cdot N_d}}
$$
or simply, by representing `V = V_d + V_a`:
$$
d=\sqrt{\frac{2\epsilon V}{e N_d}}
$$

### EXTRA: Use depletion region as capacitor

Parallel-plate capacitance:
$$
C=\frac{\epsilon A}{d}
$$
We consider its per-area variation:
$$
C=\frac{\epsilon}{d}=\frac{\epsilon}{\sqrt{\frac{2\epsilon V}{e N_d}}}\\
=\epsilon\sqrt{\frac{e N_d}{2\epsilon V}}=\sqrt{\frac{e\epsilon N_d}{2 V}}
$$
or you can derive this via:
$$
C=\frac{dQ}{dV}=...=\sqrt{\frac{e\epsilon N_d}{2 V}}
$$
A *Matt-schottky Plot* is a `C^-2 - V_a` plot:
$$
\frac1{c^2}=\frac{2(V_d+V_a)}{e \epsilon N_d}
$$
Its slop is:
$$
\frac{d\frac1{c^2}}{dV_a}=\frac2{e\epsilon N_d}
$$

## In a semiconductor

### Effective Mass

General formula:
$$
m^*=\frac{\hbar^2}{\frac{\partial E}{\partial k^2}}
$$
People usually write:

- `m^*_e` as the effective mass of an **electron**.
- `m^*_p` as the effective mass of a **hole**.

### Effective density of states

Effective DoS at the conduction band edge:
$$

N_c\equiv 2(\frac{2\pi m^*_e k_BT}{h^2})^\frac32

$$
Effective DoS at the valence band edge:
$$

N_v\equiv 2(\frac{2\pi m^*_p k_BT}{h^2})^\frac32

$$

### Number of e-'s per unit volume

Electron population density:
$$
n_e=n=N_ce^{-\frac{E_C-E_F}{k_BT}}
$$
Hole population density:
$$
n_p=p=N_ve^{-\frac{E_F-E_V}{k_BT}}
$$

### Using them on semiconductors

#### For intrinsic semiconductor

Apparently,
$$
n=p\\
\Rightarrow N_ce^{-\frac{E_C-E_F}{k_BT}}=N_ve^{-\frac{E_F-E_V}{k_BT}}\\
\Rightarrow \frac {N_c} {N_v} e^{-\frac{E_C-E_F}{k_BT}}=e^{-\frac{E_F-E_V}{k_BT}}
$$
Take `ln` on both sides:
$$
\Rightarrow \ln\frac {N_c} {N_v} =\frac 1{k_BT}(E_C-E_F-E_F+E_V)\\
\Rightarrow \ln\frac {N_c} {N_v} =\frac 1{k_BT}(E_C+E_V-2E_F)\\
\Rightarrow E_F = \frac12[ (E_C+E_V)-k_BT \ln\frac {N_c} {N_v}]
$$
Typically, when measuring "band energies", we take the valent band as reference:
$$
E_V\equiv 0
$$
Thus,
$$
E_F = \frac12[ (E_C+0)-k_BT \ln\frac {N_c} {N_v}]\\
= \frac12[ E_g-k_BT \ln\frac {N_c} {N_v}]
$$
Since `N_c ~= N_v` for a intrinsic semiconductor, we have:
$$
E_F\approx \frac12 E_g
$$
Meaning: the Fermi level of an intrinsic semiconductor lies at the mid-gap.

#### For any semiconductor

For any semicondoctor, these 2 relations give the concentrations of all 4 kinds of charged species within a homogeneous region:

##### charge balance

$$
n+N_a=p+N_d
$$

- For an intrinsic semiconductor, approximately:

$$
n=p
$$

- For a n-type semiconductor, approximately:

$$
n=N_d
$$

- For an p-type semiconductor, approximately:

$$
N_a=p
$$

##### the Law of Mass Action

According to the *Law of Mass Action*, <u>the product of the concentrations of both types of carriers should equal to the intrinsic carrier population squared</u>:
$$
n_e\cdot n_p=n_i^2
$$
Expand it:
$$
\Rightarrow N_C\cdot N_V e^{-\frac{E_C-E_V}{k_BT}}
$$
Remember that the Band Gap is just the difference between the Conduction Band and the Valence Band:
$$
\because E_g\equiv E_C-E_V \\
\therefore n_i^2 = N_C\cdot N_V e^{-\frac{E_g}{k_BT}}
$$
This is useful.[^1]



[^1]: See Notability Notes. You can express the charge carrier density w.r.t. intrinsic levels. Omitted here.

#### Use it to derive the Built-in Potential in a PN junction

For <u>N-region</u>, the electron population density is given bt Charge Balance:
$$
n=N_d=N_ce^{-\frac{E_C-E_F}{k_BT}} \text{, labeled as}= N_ce^{-\frac{qA}{k_BT}}\\
\Rightarrow A=\frac{k_BT}q \ln\frac{N_c}{N_d}
$$
For <u>P-region</u>, these two laws give:
$$
\text{Charge Balance}\Rightarrow p=N_a\\
\text{Law of Mass Action}\Rightarrow n\cdot p=n_i^2
$$
Combined, we have the `n` density in P-region:
$$
n=\frac{n^2_i}{N_a}
$$
The `n - N_c` relation is still applicable:
$$
n=N_ce^{-\frac{E_C-E_F}{k_BT}} \text{, labeled as}=  N_ce^{-\frac{qB}{k_BT}}\\
\Rightarrow \frac{n^2_i}{N_a} = N_ce^{-\frac{qB}{k_BT}}\\
\Rightarrow B=\frac{k_BT}q \ln\frac{N_cN_a}{N_i^2}
$$
Thus,  the Built-in Potential is:
$$
\phi_{bi}=B-A=\frac{k_BT}q \ln\frac{N_cN_a}{N_i^2}-\frac{k_BT}q \ln\frac{N_c}{N_d}\\
=\frac{k_BT}q [\ln\frac{N_cN_a}{N_i^2}-\frac{k_BT}q \ln\frac{N_c}{N_d}]\\
=\frac{k_BT}q \ln\frac{N_dN_a}{N_i^2}
$$




# Formulae

## Current densities in junctions

### in a PN junction

$$
j=(j_\text{0,e- in n} + j_\text{0, e- in p})(e^{-\frac{eV_a}{k_BT}}-1)
$$

where:

- `j_\text{0,e- in n} ` is the electron current in N-region when no voltage is applied.
- `j_\text{0,e- in p} ` is the electron current in P-region when no voltage is applied.
- `V_a` is the applied voltage.

### in a Schokky junction (semicon.->metal)

$$
j=j_0 (e^{-\frac{eV_a}{k_BT}}-1)
$$

This includes:

- Current from metal->semiconductor: 
  $$
  j_{m\rightarrow s}=j_0
  $$

- Current from semiconductor->metal:
  $$
  j_{s\rightarrow m}=j_0 e^{-\frac{eV_a}{k_BT}}
  $$


## In the depletion region

(using N-type as example)

### Net charge density:

Following above, we have:
$$
\rho (x)=e(N_d-n)
$$
where:

- `e`: e- charge

### Electric field:

$$
E(x)=-\frac{eN_d}{\epsilon}(x-d)
$$

Where: 

- `\epsilon`: permittivity
- `d`: length of depletion region
- `x`: distance from the point of interest to the junction interface

### Electric potential / voltage:

$$
V(x)=\int E(x) dx\\ 
= -\frac{eN_d}{\epsilon}(\frac{x^2}{2}-dx)
$$

