import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // O negociador espera um objeto simples, então precisamos transformar os cabeçalhos
  const negotiatorHeaders: Record<string, string> = {};

  const cookie = request.cookies.get("language");

  if (cookie) {
    return cookie.value;
  }

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  //console.log("Negociador", negotiatorHeaders)
  // @ts-ignore locales são readonly
  const locales: string[] = i18n.locales;

  // Use negotiator e intl-localematcher para obter a melhor localidade
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  request.cookies.set("language", locale);

  return locale;
}

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (PUBLIC_FILE.test(pathname)) return;

  // Verifique se há alguma localidade suportada no nome do caminho
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirecionar se não houver localidade
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Exemplo se a solicitação recebida é /products
    // A nova URL agora é /pt/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignorando `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
